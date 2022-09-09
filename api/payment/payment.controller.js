const {
  makePayment,
  createPayment,
  createCustomer,
  retrieveCustomer,
} = require('./payment.service');
const { updateUser, getSingleUser } = require('../user/user.service');

async function handlerPayment(req, res) {
  const { paymentMethod, amount, userId } = req.body;

  const foundUser = await getSingleUser(userId)
  console.log(foundUser, userId)
  try {
    const { id, card } = paymentMethod;

    let customer = null;
    if (!foundUser?.payment?.customerId) {
      customer = await createCustomer(foundUser, paymentMethod);

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
      await updateUser(foundUser._id, userToUpdate);
    }

    customer = await retrieveCustomer(foundUser.payment.customerId);

    const paymentCard = {
      id: foundUser.payment.cards[0].paymentMethodId,
    };
    const payment = await makePayment({ paymentMethod: paymentCard, amount, customer });

    // save payment to db
    const registerPayment = {
      refId: payment.id,
      description: payment.description,
      value: payment.amount,
      currency: payment.currency,
      userId: foundUser._id,
    };

    await createPayment(registerPayment);

    return res.json(payment);
  } catch (error) {
    return res.status(500).json("que ha pasado tio", error);
  }
}

module.exports = {
  handlerPayment,
};
