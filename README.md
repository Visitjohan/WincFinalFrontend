Things I'm okay with:
• I've created a standard header and footer, which feels familiar to me.
• I've standardized the ingredients list by removing the initial "\* " from each item.
Things I'm happy about:
• I've implemented a function to display the "Total cooking time" dynamically, showing "x minutes" if it's less than an hour and "x:xx" otherwise.
• I've used an object fitter to ensure consistent picture sizes, though I believe a better solution would involve allowing users to crop images upon upload, similar to Facebook's feature.
• All filters are functional, with clear labels for written filters and health labels provided in the dropdown. Additionally, I've included a reset button to clear all selections.
• Regarding vegan and vegetarian options, I've ensured that if a recipe is vegan, it is automatically categorized as vegetarian. I've implemented a function to display the appropriate label based on the "healthLabels" listed.
Not too happy about:
• While the home page meets my expectations, the single recipe page didn't turn out as planned. However, all necessary elements are present.
• I found working with Chakra UI to be less than ideal. Although I experimented with Bootstrap for conceptual design, I've since transitioned to primarily using Tailwind CSS and Tailwind-based libraries like NexUI and Shadcn. While the homepage responds well to resizing, the single recipe page does not, and I'm unsure why. Transitioning to Tailwind CSS would have made this task much simpler, and I regret spending so much time on it. Perhaps I didn't fully grasp the Chakra way of thinking, and I should spend some time meditating on it.
Hope this meets your expectations.
