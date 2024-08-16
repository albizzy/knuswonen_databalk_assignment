# Responsive Homepage for Social Housing Corporation

This project is a fully responsive homepage built using [Next.js](https://nextjs.org/docs) and [TailwindCSS](https://tailwindcss.com/docs/installation), based on a design provided via Figma. The goal was to create a pixel-perfect implementation of the desktop version of the homepage and ensure it functions seamlessly across various screen sizes, including tablets and mobile devices.

## Figma Design
  
The design for this project was provided in a Figma file, accessible via the following link:

- [Figma Design](https://www.figma.com/design/yk8VeMolGqLDi4KDQTkYIT/KnusWonen?node-id=0-1&t=CcBceBIUCvCoP8mp-1)

## Project Setup and Installation

Follow these steps to install and run the project locally. These instructions are designed to be straightforward, so even if you're not a developer, you should be able to get the project up and running.

### Prerequisites

- Node.js: Ensure that Node.js is installed on your machine. You can download it [here](https://nodejs.org/en).
- Git: If you want to clone the repository, Git should be installed. Download it [here](https://git-scm.com/).

### Installation Steps

1. Clone the repository (or download the zip):

    ```bash
    git clone https://github.com/albizzy/knuswonen_databalk_assignment.git

    ```

    If you downloaded the zip, unzip the file and navigate to the project directory.

2. Navigate to the project directory:

    ```bash
    cd knuswonen_databalk_assignment
    ```

3. Install dependencies

    Once you're in the project directory, install the necessary dependencies:

    ```bash
    npm install
    ```

4. Run the project

    After the dependencies are installed, start the development server:

    ```bash
    npm run dev
    ```

5. Open the project in your browser:

    Open your web browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the homepage as per the Figma design.


### Approach to Responsiveness

To ensure the homepage is fully responsive across different screen sizes, I employed the following approach:

- **TailwindCSS Utility Classes**: TailwindCSS's utility-first approach made it easy to apply responsive styles directly within the JSX. For example, I used classes like sm:text-lg, md:px-4, and lg:flex-row to adjust typography, padding, and widths at various breakpoints.
- **Media Breakpoints**: I utilized TailwindCSS's built-in breakpoints (sm, md, lg) to create a seamless experience across devices. These breakpoints allowed me to specify different styles depending on the screen size, ensuring that the layout adapts gracefully from mobile to desktop.
- **Custom Widths and Heights**: For images and containers, I defined specific widths and heights at different breakpoints to maintain the design's visual integrity.
- **Flexbox and Grid Layouts**: I leveraged Flexbox and Grid for complex layouts, which allowed for flexible and responsive designs. These CSS properties helped in rearranging elements as the screen size changes, ensuring a consistent and user-friendly experience.

### Challenges and Ambiguities

Upon reviewing the design, several challenges and ambiguities were identified:

- **Missing Responsive Design**: The design provided was only for the desktop version, with no guidance on how it should adapt to smaller screens like tablets and mobiles. This required creative decisions to ensure a responsive layout that aligns with the desktop design.
- **Component Interactions**: There was limited information on how interactive elements like buttons and links should behave on hover, focus, or active states. This could lead to inconsistencies in user experience across different components.
- **Image Resolutions**: The design did not specify the required image resolutions for different screen sizes. This could affect the overall visual quality on high-resolution devices.
- **Color Variations**: While the color scheme was provided, there was no guidance on potential variations or accessibility considerations, such as ensuring sufficient contrast ratios for text and background colors.
- **Spacing and Layout Consistency**: Some spacing and alignment details were not clearly defined, particularly for complex layouts. This required additional interpretation to maintain visual consistency.


### Potential Improvements to the Design

As an end user, the design could be improved in the following ways:

- **Accessibility**: Implementing features such as keyboard navigation and screen reader support could make the website more accessible to a wider audience.
- **Mobile-Specific Design**: Including a specific design for mobile devices would ensure a more user-friendly experience on smaller screens.
- **User Feedback on Interactions**: Providing visual feedback for interactive elements (e.g., buttons, links) when hovered, clicked, or focused would enhance the overall user experience.

As a developer, the design could be enhanced with:

- **Clear Breakpoints**: Providing specific breakpoints for responsiveness would ensure that the design intention is maintained across all devices without guesswork.
- **Component Variants**: Offering variants of components, such as different button styles or layouts, would allow for more flexibility in implementation.
- **Detailed Style Guide**: Including a detailed style guide with exact font sizes, weights, colors, and spacing would reduce ambiguity during implementation and ensure consistency across all pages.
- **Interactive Element States**: Defining the behavior of interactive elements (hover, focus, active states) in the design would ensure a more cohesive user experience.
- **High-Resolution Images**: Specifying the required image resolutions for different devices would ensure visual quality is maintained, especially on retina and high-DPI screens.


### Feedback for the Designer

The design is clear, visually appealing, and well-thought-out. However, to further enhance collaboration between designers and developers, I would suggest considering the following:

- **Responsive Design Guidelines**: Including responsive design versions for tablet and mobile would provide a clearer direction for developers and ensure that the final product matches the design intent across all devices.
- **Detailed Component States**: Providing specific guidelines for hover, focus, and active states of interactive elements would enhance user experience consistency.
- **Accessibility Considerations**: Incorporating accessibility best practices, such as sufficient contrast ratios and keyboard navigation, would make the design more inclusive.
- **Refer to Potential Improvements**: The potential improvements listed above could be valuable additions to future projects, ensuring even greater clarity and efficiency in the design-to-development handoff process.
  