const tf = require('@tensorflow/tfjs');

async function predictMSEModel(model, x) {
    const prediction = model.predict(x);
    const mappedPrediction = await tf.tidy(() => {
        const lessThanNegativePointOne = tf.less(prediction, tf.scalar(-0.1));
        const betweenNegativePointOneAndPointOne = tf.logicalAnd(
            tf.greaterEqual(prediction, tf.scalar(-0.1)),
            tf.less(prediction, tf.scalar(0.1))
        );
        const greaterThanPointOne = tf.greaterEqual(prediction, tf.scalar(0.1));

        const mappedValues = tf.where(lessThanNegativePointOne, tf.scalar(-1), 
            tf.where(betweenNegativePointOneAndPointOne, tf.scalar(0), tf.scalar(1)));

        return mappedValues;
    });

    return mappedPrediction;
}

export { predictMSEModel };