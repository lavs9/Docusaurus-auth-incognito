---
sidebar_position: 2
---

# Getting Started with Wave

## Overview
This guide will help you get started with Wave, our high-performance front office platform for institutional trading.

## Prerequisites
- Trading account credentials
- API access keys
- Network requirements

## Installation

```bash
# Installation and setup steps
npm install @wave/client
```

## Configuration

1. Configure API credentials
2. Set up network connectivity
3. Initialize the client

## Basic Usage

### Connecting to Markets
```typescript
// Example of market connection
const waveClient = new WaveClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

await waveClient.connect();
```

### Basic Order Execution
```typescript
// Example of order execution
const order = await waveClient.createOrder({
  symbol: 'AAPL',
  side: 'BUY',
  quantity: 100,
  type: 'MARKET'
});
```

## Next Steps
- Advanced trading strategies
- Risk management setup
- Analytics configuration
- API integration guide