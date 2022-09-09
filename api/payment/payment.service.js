const Stripe = require('stripe');

const Payment = require('./payment.model');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Create a new customer
 * @param {Obj} user Info
 * @param {Obj} paymentMethod Method payment
 * @returns Promise
 */
async function createCustomer(user, paymentMethod) {
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.username,
      payment_method: paymentMethod.id,
    });

    return customer;
  } catch (error) {
    console.log('error on createCustomer', error);
    throw error;
  }
}

async function retrieveCustomer(customerId) {
  try {
    const customer = await stripe.customers.retrieve(customerId);

    return customer;
  } catch (error) {
    console.log('Couldnt retrieve customer', error);
    throw error;
  }
}

async function makePayment({ paymentMethod, amount, customer }) {
  const { id } = paymentMethod;

  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Email',
      customer: customer.id,
    });

    return payment;
  } catch (error) {
    console.log('Couldnt make payment', error);
    throw error;
  }
}

function createPayment(payment) {
  return Payment.create(payment);
}

module.exports = {
  makePayment,
  createCustomer,
  createPayment,
  retrieveCustomer,
};
