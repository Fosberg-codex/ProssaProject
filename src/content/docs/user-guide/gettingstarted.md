---
title: Getting Started
description: This guide will walk you through how to navigate to get started with prossa
---

This guide will walk you through how to navigate to get started with prossa


First, import the necessary modules:

```python
import pandas as pd
from prossa import analyze_dataset, check_outliers
```

## Loading Your Dataset

Load your dataset using pandas:

```python
df = pd.read_csv('your_dataset.csv')
```

## Analyzing Your Dataset

To get a comprehensive analysis of your dataset:

```python
analyze_dataset(df)
```

This function will check various aspects of your data and provide recommendations for preprocessing techniques.



