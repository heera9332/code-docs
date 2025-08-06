# Artificiall Neural Networks

An Artificial Neural Network (ANN) is a computational model inspired by the structure and function of biological brains. It consists of layers of simple processing units called neurons (or nodes), each of which:

Aggregates inputs via weighted connections:

𝑧 = ∑ 𝑤𝑖𝑥𝑖 + 𝑏

where 𝑥𝑖 are inputs,  wi their weights, and b a bias term.

Applies an activation function ϕ(⋅) to produce its output:

y=ϕ(z)

Passes outputs to neurons in the next layer (in feed-forward networks).

By adjusting weights and biases through a learning algorithm (e.g., backpropagation), ANNs can approximate complex, non-linear mappings from inputs to outputs—enabling tasks like classification, regression, pattern recognition, and more.

## Common Activation Functions in ANNs

- Step (Threshold)
- Linear (Identity)
- Sigmoid
- Tanh
- ReLU
- ELU
- Softmax



| Name                  | Formula                                                                            | Range               | Pros & Cons                                                                                  |   |    |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------- | - | -- |
| **Step (Threshold)**  | $\phi(z)=\begin{cases}1&z\ge0\\0&z<0\end{cases}$                                   | $\{0,1\}$           | Simple, non-differentiable → cannot train with gradients.                                    |   |    |
| **Linear (Identity)** | $\phi(z)=z$                                                                        | $(-\infty,\infty)$  | Used in output layers for regression; no capacity to model non-linearity if used throughout. |   |    |
| **Sigmoid**           | $\phi(z)=\frac{1}{1 + e^{-z}}$                                                     | $(0,1)$             | Smooth and differentiable; suffers vanishing gradients for large (                           | z | ). |
| **Tanh**              | $\phi(z)=\tanh(z)=\frac{e^{z}-e^{-z}}{e^{z}+e^{-z}}$                               | $(-1,1)$            | Zero-centered; still can vanish for large (                                                  | z | ). |
| **ReLU**              | $\phi(z)=\max(0,\,z)$                                                              | $[0,\infty)$        | Simple, efficient, promotes sparse activations; “dying ReLU” if neurons get stuck at zero.   |   |    |
| **Leaky ReLU**        | $\phi(z)=\begin{cases}z&z\ge0\\\alpha z&z<0\end{cases}$, $\alpha\ll1$              | $(-\infty,\infty)$  | Mitigates dying ReLU by allowing a small gradient when $z<0$.                                |   |    |
| **Parametric ReLU**   | $\phi(z)=\begin{cases}z&z\ge0\\\alpha z&z<0\end{cases}$, $\alpha$ learnable        | $(-\infty,\infty)$  | Learns the negative-slope parameter.                                                         |   |    |
| **ELU**               | $\phi(z)=\begin{cases}z&z\ge0\\\alpha(e^{z}-1)&z<0\end{cases}$                     | $(-\alpha,\infty)$  | Smooth near zero, can speed up learning; adds computational cost.                            |   |    |
| **Softmax**           | $\phi_j(\mathbf{z}) = \tfrac{e^{z_j}}{\sum_k e^{z_k}}$ (for a vector $\mathbf{z}$) | $[0,1]$ (sums to 1) | Used in multi-class output layers to model categorical distributions.                        |   |    |


## Choosing an Activation

Hidden layers

ReLU (or variants) is currently the default for deep nets—computationally cheap, mitigates vanishing gradients.
Tanh or Leaky ReLU can be used when zero-centered outputs or small negative slopes are helpful.

Output layer

Linear for regression (predicting real values).
Sigmoid for binary classification (single-unit, outputs probability).
Softmax for multi-class classification.
