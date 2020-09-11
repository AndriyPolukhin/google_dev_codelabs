# Input required libraries:
import numpy as np
import matplotlib.pyplot as plt

# Generating input dataset:
# It will generate 100 points between -10 and 10.

input = np.linspace(-10,10,100)

# Define sigmoid function:

def sigmoid(X):
    val = 1/(1+np.exp(-X))
    return val

# Output values:
output = sigmoid(input)

# Plotting the graph for sigmoid function:
plt.plot(input,output)
plt.xlabel('Input')
plt.ylabel('Output')
plt.title('Sigmoid Function')

plt.show()
