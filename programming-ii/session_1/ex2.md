flowchart TD
  A([Start]) --> B[User Input: Set Target Temp]
  B --> C[Check Current Temp]
  C --> D{Current < Target?}
  D -->|Yes| E[Activate Heater]
  D -->|No| F{Current > Target?}
  F -->|Yes| G[Activate AC]
  F -->|No| H[Maintain Temp]
  E --> I[Wait for Interval]
  G --> I
  H --> I
  I --> J{New User Input?}
  J -->|Yes| B
  J -->|No| C