// ModelDetails.jsx
// import React from "react";

const ModelDetails = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "400%",
        backgroundColor: "white",
        padding: "20px",
        marginTop: "50px",
        marginLeft: "150px",
        borderRadius: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Model Details</h2>
        <br />
        <p>
          The model development commenced in Google Colab, leveraging its
          cloud-based infrastructure for computational tasks. The initial phase
          focused on data preprocessing, a critical step involving the
          normalization of input features. Normalization is a technique used to
          scale numerical values within a specific range, often between 0 and 1
          or with a mean of 0 and a standard deviation of 1. This step is
          essential to ensure that the data is on a comparable scale, preventing
          certain features from dominating the learning process due to their
          larger magnitudes, and to avoid issues like exploding gradients during
          model training. The dataset used for this project comprised a total of
          18545 records, meticulously segmented into distinct subsets. The
          largest subset was the training dataset, containing 14979 records.
          This subset was used to teach the model to recognize patterns and
          relationships within the data. Additionally, a validation dataset
          consisting of 1877 records was employed to fine-tune the model&rsquo;s
          hyperparameters and assess its performance during training, thereby
          preventing overfitting. The smallest subset, the test dataset,
          contained 1689 records and served as an entirely separate benchmark to
          evaluate the model&rsquo;s performance after training. During the
          training phase, the data was processed in mini-batches, with each
          batch containing 100 records. This approach facilitates more efficient
          model training, as the model updates its parameters based on smaller
          batches of data rather than the entire dataset at once. The
          architecture of the model was constructed based on insights and
          guidelines outlined in a specific paper. While the procedure mentions
          drawing inspiration from this paper, detailed specifics about the
          layers, types of activation functions used, the arrangement of neural
          network units, or any other architectural nuances were not explicitly
          articulated. Optimization of the model parameters was carried out
          using the Adam Optimizer, a popular optimization algorithm known for
          its effectiveness in training deep neural networks. The learning rate,
          a hyperparameter that controls the magnitude of parameter updates
          during training, was set at 0.0001. This choice of learning rate is
          often seen in scenarios where the model requires slow and steady
          adjustments to converge to an optimal solution. The training process
          spanned 1000 epochs, indicating that the entire dataset was used for
          training the model 1000 times. After each epoch, the model&rsquo;s
          performance was evaluated using the validation dataset, calculating
          the validation loss. The model exhibiting the lowest validation loss
          was preserved onto Google Drive, suggesting a form of early stopping
          to prevent the model from memorizing the training data too well and
          failing to generalize to new data
        </p>
        {/* Add more Lorem Ipsum content or actual theory content here */}
      </div>
    </div>
  );
};

export default ModelDetails;
