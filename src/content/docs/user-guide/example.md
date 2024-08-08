---
title: Example Workflow
description: An example of how you might use Prossa in a typical data preprocessing workflow.
---

Here's an example of how you might use Prossa in a typical data preprocessing workflow:

```python
import pandas as pd
from prossa import analyze_dataset, check_missing_values, check_outliers, check_scaling_encoding

# Load your dataset
df = pd.read_csv('your_dataset.csv')

# Get a comprehensive analysis
analyze_dataset(df)

# Check for missing values
missing_values = check_missing_values(df)
print(missing_values)

# Check for outliers
outliers = check_outliers(df)
print(outliers)

# Check if scaling or encoding is needed
scaling_encoding = check_scaling_encoding(df)
print(scaling_encoding)
```

By following these steps, you can quickly gain insights into your dataset and identify necessary preprocessing steps.