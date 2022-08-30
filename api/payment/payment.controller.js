const {
  makePayment,
  createPayment,
  createCustomer,
  retrieveCustomer,
} = require('./payment.service');
const { updateUser } = require('../user/user.service');

async function handlerPayment(req, res) {
  const { user } = req;
  const { paymentMethod, amount } = req.body;

  try {
    const { id, card } = paymentMethod;

    let customer = null;
    if (!user?.payment?.customerId) {
      customer = await createCustomer(user, paymentMethod);

      const userToUpdate = {
        payment: {
          customerId: customer.id,
          cards: [{
            paymentMethodId: id,
            brand: card.brand,
            country: card.country,
            expMonth: card.exp_month,
            expYear: card.exp_year,
            funding: card.funding,
            last4: card.last4,
          }],
        },
      };

      // eslint-disable-next-line no-underscore-dangle
      await updateUser(user._id, userToUpdate);
    }

    customer = await retrieveCustomer(user.payment.customerId);

    const paymentCard = {
      id: user.payment.cards[0].paymentMethodId,
    };
    const payment = await makePayment({ paymentMethod: paymentCard, amount, customer });

    // save payment to db
    const registerPayment = {
      refId: payment.id,
      description: payment.description,
      value: payment.amount,
      currency: payment.currency,
      userId: user._id,
    };

    await createPayment(registerPayment);

    return res.json(payment);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  handlerPayment,
};
