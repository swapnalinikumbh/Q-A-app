import React, { useState } from 'react'

const CSSSection = () => {
  const cssQuestions = [
    {
      question: '1.	Css opacitys ?',
      answer: 'In CSS, the opacity property is used to control the transparency of an element, such as text, images, or entire containers. It accepts a value between 0 (completely transparent) and 1 (completely opaque).',
    },
    {
      question: '2.	What is meant by universals selectors in css ?',
      answer: 'In CSS, a universal selector is denoted by an asterisk (*) and is used to select all elements on a web page. It matches every HTML element in the document, regardless of its type or hierarchy within the document structure. The universal selector is used to target all elements on the page and set their margin and padding properties to 0. This is often used as a CSS reset or to remove default browser styling, providing a consistent starting point for styling.',
    },
    {
      question: '3.	Display nones and visibility hidden difference?',
      answer: (
        <>
          <strong>display: none:</strong>-When an element is set to display: none, it is completely removed from the flow of the document, and its space is not reserved.
          -The element is not visible, and it won't take up any space on the page. It's as if the element doesn't exist.
          -It cannot be interacted with by users, and it won't trigger any events.
          -Elements with display: none are not visible to screen readers.
          <br /><br />
          <strong>visibility: hidden:</strong>-When an element is set to visibility: hidden, it remains in the flow of the document, and its space is reserved.
          -The element is not visible, but it still occupies the same space it would if it were visible.
          -It can still be interacted with by users, and it can trigger events.
          -Elements with visibility: hidden are accessible to screen readers, so screen readers will still read the content.

        </>
      ),
    },
    {
      question: '4.	Medias query?',
      answer: 'Media queries are a fundamental part of responsive web design. They allow to apply different styles or layouts to a web page based on characteristics of the users device, such as screen size, orientation, and resolution.',
    },
    {
      question: '5.	css3?',
      answer: (
        <>
          <ul>
            <li>css selectors</li><li>css3 color</li><li>media queries</li><li>backgrounds</li><li>borders</li><li>flexbox </li><li>grid</li><li>animation</li><li>fonts</li> <li>text</li> <li>transitions </li><li>rounded corners</li>
          </ul>
        </>
      ),
    },
    {
      question: '6.	Difference between flex and grid?',
      answer: (
        <>
          <strong>Flexbox (Flexible Box Layout):</strong>One-Dimensional Layout: Flexbox is designed for one-dimensional layouts, either as a row or a column.
          Content-Centric: Flexbox is ideal for laying out items within a container, where the focus is on distributing space among these items, making it suitable for things like navigation menus, card layouts, or centering content vertically or horizontally.
          Ordering: We can easily change the order of flex items, which can be useful for responsive designs.
          Responsive Sizing: Flex items can have flexible widths or heights based on the available space within their container.
          Alignment: Flexbox offers fine-grained control for aligning items along the main or cross axis.

          <br /><br />
          <strong>Grid Layout:</strong>Two-Dimensional Layout: Grid is designed for two-dimensional layouts, which means it's well-suited for creating both rows and columns simultaneously.
          Layout Control: Grid is best for creating complex and precise layouts, such as grids of images, magazine-style page layouts, or any design that requires precise control over the placement of items.
          Implicit Grid: Grid can automatically generate rows and columns, simplifying layout creation.
          Alignment: Grid offers a powerful way to align and position items within the grid, making it a great choice for design that requires specific alignment and placement.
          Overlap: Grid allows items to overlap if necessary, which can be useful in certain design scenarios.

        </>
      ),
    },
    {
      question: '7.	Default positions in css ?',
      answer: (
        <>
          <strong>position: static; (Default): </strong>Most HTML elements have a default position value of static. In this mode, an element is positioned according to the normal flow of the document. It doesn't respond to properties like top, right, bottom, or left. Margins and padding affect the space around the element without affecting nearby elements.
          <br /><br />
          <strong>position: relative;: </strong>When we set an element's position to relative, it retains its normal position in the document flow but allows us to adjust its position using properties like top, right, bottom, and left. Other elements in the document flow will still occupy the original space of the relatively positioned element.
          <br /><br />
          <strong>position: absolute;: </strong>Absolute positioning takes the element out of the normal document flow. It positions the element relative to the nearest ancestor with a non-static position (i.e., relative, absolute, fixed, or sticky). If there is no such ancestor, it's positioned relative to the initial containing block (usually the viewport).
          <br /><br />
          <strong>position: fixed;: </strong>Fixed positioning also removes the element from the document flow but positions it relative to the viewport. The element will stay in the same position on the screen, even when the user scrolls.
          <br /><br />
          <strong>position: sticky;: </strong>Sticky positioning is a hybrid between relative and fixed. It acts as relative within its container until it reaches a specified offset (e.g., top: 0;), at which point it becomes fixed and sticks to the viewport. It returns to relative positioning when the user scrolls back.
        </>
      ),
    },
    {
      question: '8.	Difference types of css selectorss?',
      answer: (
        <>
          <strong>Class Selector:</strong>Selects elements with a specific class attribute value.<br />
          <strong>ID Selector: </strong>Selects a single element with a specific ID attribute value. Note that IDs should be unique within a page.<br />
          <strong>Universal Selector: </strong>Selects all elements on the page. It is denoted by an asterisk (*).<br />
          <strong>Descendant Selector: </strong>Selects an element that is a descendant of another element. It is indicated by a space.<br />
          <strong>Child Selector: </strong>Selects an element that is a direct child of another element. It is indicated by the &gt; symbol.<br />
          <strong>Adjacent Sibling Selector: </strong>Selects an element that is immediately preceded by another element.<br />
          <strong>Attribute Selector: </strong>Selects elements with a specific attribute and, optionally, a specific attribute value.
          1.[attr]: Selects elements with the specified attribute.
          2. [attr="value"]: Selects elements with the specified attribute and value.<br />

          <strong>Pseudo-Class Selector: </strong>Selects elements based on their state or position. Common pseudo-classes include :hover, :active, :focus, and :nth-child().<br />
          <strong>Pseudo-Element Selector: </strong>Selects specific parts of an element, such as the first letter or first line of text within an element. Pseudo-elements are denoted by ::.before, after.
        </>
      ),
    },
    {
      question: '9.	What is z-indexs in css?',
      answer: 'In CSS, the z-index property is used to control the stacking order of elements on a web page along the z-axis (the axis that extends from the screen towards the viewer). It determines which elements are displayed in front of or behind other elements when they overlap on the page. The z-index property accepts a numerical value or the auto keyword.',
    },
    {
      question: '10.	Shorthands border property in css?',
      answer: 'In CSS, the shorthand border property allows us to set multiple border-related properties in a single declaration. The border property is useful for simplifying  code and making it more concise. It combines the following individual border properties: 1. border-width 2. border-style 3. border-color',
    },
    {
      question: '11.	Explain css box module?',
      answer: (
        <>
        The CSS Box Model is a fundamental concept in web design and layout. It describes how elements on a web page are visually represented and how their dimensions and spacing are calculated. <br/>
        <strong>Content: </strong>The innermost box represents the content of the element, such as text, images, or other HTML elements. This is the area where the actual content of the element is displayed.<br/>
        <strong>Padding: </strong>The padding is the space between the content and the element's border. It is used to create space around the content and is controlled using the padding property in CSS.<br/>
        <strong>Border: </strong>The border is a line that surrounds the padding and content. It helps visually separate the element from its surroundings and is controlled using the border property in CSS.<br/>
        <strong>Margin:</strong>The margin is the space outside the border that separates one element from its neighboring elements. It controls the spacing between elements on a webpage and is specified using the margin property in CSS.
        </>
      ),
    },
    {
      question: '12.	What are the properties use in border in css?',
      answer: 'border-width, border-style, and border-color, border-radius,border-top, border-right, border-bottom, border-left, border-image, border-collapse, border-spacing',
    },
    {
      question: '13.	Property in flex box in css ?',
      answer: 'In CSS, when working with Flexbox (Flexible Box Layout), we have a set of properties to control the layout and alignment of elements within a flex container.display: flex; or display: inline-flex, flex-direction, flex-flow, justify-content, align-items, align-content, align-self,…Flexbox is a CSS layout module that provides a flexible and efficient way to create one-dimensional layouts. It allows us to distribute space among items within a container, align them, and reorder them as needed. Flexbox is particularly useful for building responsive and dynamic layouts.',
    },
    {
      question: '14.	Float property in css ?',
      answer: 'The float property in CSS is used to control the positioning of an element within its containing element. When an element is floated, it is moved to the left or right of its normal position in the document flow and allows other elements to flow around it.float: left & float: right;',
    },
    {
      question: '15.	What are sass, less and stylus in css (Css preprocessors) ?',
      answer: 'CSS preprocessors are scripting languages that extend the capabilities of standard CSS (Cascading Style Sheets). They allow developers to write more maintainable and efficient CSS code by introducing features like variables, nesting, mixins, functions, and more. ',
    },
    {
      question: '16. What is normalization in css?',
      answer: 'In CSS, "normalization" typically refers to a set of practices aimed at making web page styles more consistent and predictable across different web browsers. It is not a built-in CSS feature but rather a collection of techniques and best practices to ensure a consistent baseline for styling web content. These practices include: Reset styles, Box Sizing, Font and text properties, Margin and padding, cross-browser compatibility.',
    },
    {
      question: '17',
      answer: '',
    },
    
    // Add more questions and answers as needed
  ];

  // State to manage which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded question
  const toggleQuestion = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">CSS Section</h2>
      <ul className="list-group">
        {cssQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="answer-container bg-light-blue text-dark p-3">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CSSSection