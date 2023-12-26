import React, { useState } from 'react'

const HTMLSection = () => {
  const htmlQuestions = [
    {
      question: '1.	Html5s features?',
      answer: (
        <>
          <ul>
            <li>Semantic Elements</li>
            <li> Audio and Video Support</li>
            <li>Canvas</li>
            <li>Geolocation</li>
            <li>Local Storage</li>
            <li>Responsive Design</li>
            <li>Drag and Drop</li>
          </ul>
        </>
      ),
    },
    {
      question: '2.	Why we declare DOCTYPE in html?',
      answer: 'Declaring a Document Type Definition (DOCTYPE) in HTML is important because it specifies the version of HTML or XHTML being used in a web document. ',
    },
    {
      question: '3.	Why we use Metas tag in html?',
      answer: (
        <>
          Meta tags in HTML are used to provide metadata or additional information about a web page. They are typically placed within the &lt;head&gt; section of an HTML document and are not displayed on the web page itself. Instead, they convey important information to web browsers, search engines, and other web services.
        </>
      ),
    },
    {
      question: '4.	Differentiate between semantics and non-semantics tags in html?',
      answer: (
        <>
          Semantic and non-semantic tags in HTML refer to how tags are used to structure and format the content of a web page. The primary difference between the two is that semantic tags carry meaning and convey the structure and content of the page, while non-semantic tags are used for formatting and presentation purposes without providing any specific meaning.
          <br />
          <br />
          <strong>Semantic Tags:</strong> Semantic tags are HTML elements that convey the meaning or purpose of the content they enclose. They help describe the type of content within them. Examples of Semantic Tags:
          <ul>
            <li>&lt;header&gt;: Represents the introductory content at the top of a section or page.</li>
            <li>&lt;nav&gt;: Represents a navigation menu.</li>
            <li>&lt;main&gt;: Represents the main content of a document.</li>
          </ul>
          <br />
          <strong>Non-Semantic Tags:</strong> Presentation and Styling: Non-semantic tags are typically used for presentation and styling purposes. They don't convey any specific meaning about the content they contain.
          <ul>
            <li>&lt;div&gt;: A generic container for grouping and styling elements.</li>
            <li>&lt;span&gt;: A generic inline container used for styling small portions of text.</li>
            <li>&lt;b&gt; and &lt;i&gt;: Tags for bold and italic text formatting, respectively.</li>
            <li>&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;: Tags for creating tables, often used for layout.</li>
          </ul>
        </>
      ),
    },
    {
      question: '5.	Can spans is divs like structure by dislpay-block?',
      answer: 'Yes, we can make a <span> element behave like a <div> in terms of its display by using CSS to change its display property to block. This will cause the <span> element to act as a block-level element, similar to a <div>, with its content taking up the full width of its containing element and stacking vertically.',
    },
    {
      question: '6.	What do we understand by attribute in html?',
      answer: 'Attributes in HTML provide additional information about an element and are used to modify or define the characteristics of that element. Each HTML element can have one or more attributes, and these attributes are specified within the opening tag of the element. Attributes are always written as name-value pairs, separated by an equal sign (=), and enclosed in double or single quotation marks.',
    },
    {
      question: '7.	What are the required attributes in imgs tag?',
      answer: (
        <>
          <ul>
            <li>src (Source): While not technically required, the src attribute is essential for specifying the source URL of the image. Without this attribute, the &lt;img&gt; tag wont display any image.</li>
            <li> alt (Alternative Text): The alt attribute provides alternative text for the image. It is important for accessibility as it is read aloud by screen readers for visually impaired users and is displayed if the image fails to load.</li>
            <li>width and height</li><li>title</li><li>loading</li><li>decoding</li><li>sizes</li><li>srcset</li>
          </ul>
        </>
      ),
    },
    {
      question: '8. Difference between svgs and canvass?',
      answer: (
        <>
          <strong>SVG (Scalable Vector Graphics):</strong>Vector Graphics: SVG is based on vector graphics, meaning that images are defined as a set of shapes and paths rather than a grid of pixels. This allows them to scale without loss of quality and maintain sharpness.
          Resolution-Independent: SVG graphics are resolution-independent, making them well-suited for responsive design and displays with varying pixel densities, such as Retina displays.
          DOM Elements: SVG graphics are part of the document object model (DOM). Each SVG element is an individual DOM element, which allows for easy manipulation and interaction using JavaScript.
          CSS Styles: We can apply CSS styles directly to SVG elements, making it easy to control their appearance.
          Accessibility: SVG is inherently accessible and can be easily navigated by screen readers, making it suitable for creating accessible graphics and data visualizations.
          Text and Shapes: SVG supports the rendering of text and various shapes, making it versatile for creating icons, charts, and diagrams.
          <br /><br/>
          <strong>HTML5 Canvas:</strong>Raster Graphics: Canvas is based on raster graphics, meaning that we are essentially drawing pixel by pixel on a canvas. Once drawn, it's not straightforward to modify individual elements.
          Resolution-Dependent: Canvas drawings are resolution-dependent. If we want to create sharp graphics on high-density displays, we must manage scaling yourself.
          No DOM Elements: Canvas graphics do not become part of the DOM. Everything is drawn directly onto a bitmap, and we cannot directly interact with individual drawn elements using the DOM.
          Imperative Drawing: Canvas uses JavaScript to draw everything imperatively, which makes it more suitable for complex animations or games.
          No Inherent Accessibility: Canvas does not inherently provide accessibility features. Creating accessible content with Canvas requires additional work.
          Pixel Manipulation: We have more control over each pixel and can create custom visual effects, animations, and games using the canvas.

        </>
      ),
    },
    {
      question: '9',
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
      <h2 className="mb-4">HTML Section</h2>
      <ul className="list-group">
        {htmlQuestions.map((q, index) => (
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
  )
}

export default HTMLSection