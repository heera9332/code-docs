# Recurrent Neural Networks (RNNs)

An RNN is a neural network designed for sequence data (text, time series, audio). It processes inputs one timestep at a time, maintaining a hidden state that carries information forward.

## Key Components


## How It Works

- Unrolled view: An RNN over T timesteps can be seen as T copies of the same network, passing the hidden state forward.
- Backpropagation Through Time (BPTT) trains all copies jointly by unfolding the recurrence.

## Applications

- Language modeling & text generation
- Machine translation (seq2seq with attention)
- Speech recognition
- Time-series forecasting
- Video captioning

## CNN vs. RNN: When to Use Which

| Aspect         | CNN                                              | RNN                                             |
| -------------- | ------------------------------------------------ | ----------------------------------------------- |
| Data Type      | Grid-structured (images, spectrograms)           | Sequential (text, audio waveforms, time series) |
| Key Strength   | Spatial feature learning, translation invariance | Temporal/sequence modeling, remembering context |
| Architecture   | Feed-forward with local receptive fields         | Recurrent with hidden state carry-over          |
| Training Trick | Data augmentation, transfer learning             | Gradient clipping, gating (LSTM/GRU)            |
