## How to run: source("art_anova_energy.R")

# Aligned Rank Transform (ART) ANOVA on Energy Data
# RQ3: Does the effect of framework on energy consumption depend on the action?

# Load required package
if (!require("ARTool")) install.packages("ARTool", dependencies = TRUE)
library(ARTool)

# Set working directory to where your CSV is located (update if needed)
#setwd("~/github repositories/FrameworksEC/Analysis")
setwd("/Users/timmiel/Documents/EC/Frameworks/FrameworksEC/Analysis")

# Load full energy data (unfiltered)
data <- read.csv("art_anova_input_full.csv")

# Filter to the 8 shared actions
shared_actions <- c("checkbox", "double click", "drag & drop", "input text",
                    "left click", "refresh", "right click", "scroll")
filtered_data <- subset(data, action_category %in% shared_actions)

# Check for missing combinations
print(xtabs(~ framework + action_category, data = filtered_data))

# Remove action with missing data in any framework (here: "drag & drop" for Puppeteer)
filtered_data <- subset(filtered_data, action_category != "drag & drop")

# Convert grouping variables to factors
filtered_data$framework <- factor(filtered_data$framework)
filtered_data$action_category <- factor(filtered_data$action_category)

# Fit ART model
#model <- art(energy ~ framework * action_category, data = filtered_data)
model <- art(energy_action ~ framework * action_category, data = filtered_data)

# Run and print ANOVA
print(anova(model))
