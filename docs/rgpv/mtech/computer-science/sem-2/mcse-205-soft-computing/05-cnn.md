# Convolutional Neural Networks (CNNs)

A CNN is a feed-forward neural network designed to automatically and adaptively learn spatial hierarchies of features from data—especially images.

## 1.2 Key Components

### Convolutional Layers

Apply learnable filters (kernels) that slide over the input (image or feature map), computing dot-products to produce feature maps.
Each filter responds to a specific visual pattern (edges, textures, shapes).
Parameters: filter size (e.g. 3×3), number of filters, stride, padding.

### Activation Function

Nonlinear transform (typically ReLU) applied element-wise to feature maps.

### Pooling Layers

Downsample feature maps (e.g. max-pooling over 2×2 regions) to reduce spatial dimensions, control overfitting, and gain translation invariance.

### Fully Connected (Dense) Layers

After several conv + pool stages, flatten feature maps and connect to one or more dense layers for classification or regression.

### Optional Layers

Batch Normalization: normalizes activations to accelerate training.
Dropout: randomly zeroes activations to regularize and prevent overfitting.

## How It Works

Early layers capture low-level features (edges, textures).
Deeper layers capture higher-level concepts (parts, objects).
The network learns filters end-to-end via backpropagation.

## 1.4 Typical Architecture Pattern

```sh
Input → [Conv → ReLU → Pool] × N → Flatten → Dense → … → Output
```

## 1.5 Applications

Image classification (e.g. ImageNet)
Object detection & segmentation (e.g. Faster R-CNN, U-Net)
Video analysis (with 3D convolutions)
Audio/speech spectrogram analysis
