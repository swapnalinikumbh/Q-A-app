export const reactQuestions = [
  {
    question: '1.What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: '2.What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript recommended for use with React. It looks similar to XML/HTML.',
  },
  {
    question: '3.	React version updates?',
    answer: (
      <>
        <strong>18:-</strong>Profiler, lazy loading, suspense<br />
        <strong>17:-</strong>SSR improved<br />
        <strong>16:-</strong>Error boundary, Error handling, Fragments, Hooks, Context API, SSR, React.suspense.<br />
        <strong>15:-</strong>JSX, Virtual DOM, Stateless Component (Functional comp), Keys.
      </>
    ),
  },
  {
    question: '4.	State and props in react?',
    answer: (
      <>
        <strong>State: </strong><br /><br />
        <strong>Purpose</strong>State is used to manage and represent data that can change over time within a component. It's typically used for information that is specific to and controlled by that component.<br />
        <strong>Mutable: </strong>State is mutable, we can modify it using the setState method provided by React.<br />
        <strong>Initialization:</strong>We can initialize state within a component's constructor or using the useState hook in functional components.<br />
        1. State is used to manage and store internal data within a component.It is mutable and can be changed within the component.<br />
        2. State is managed within the component itself and can be initialized in the constructor.<br />
        3. To update the state and trigger a re-render, we use the setState () method, as directly modifying the state will not re-render the component.<br />
        4. State is private to the component and cannot be accessed or modified from outside the component.<br /><br />
        <strong>Props: </strong><br /><br />
        <strong>Purpose:</strong>Props are used to pass data from a parent component to a child component. They allow to make components reusable and maintain a unidirectional data flow.<br />
        <strong>Immutable: </strong>Props are immutable, they cannot be modified by the child component that receives them. They are read-only.In summary, state is used to manage and represent component-specific data that can change over time, while props are used to pass data from parent to child components.<br /><br />
        Functional components can also manage state using hooks like useState, making state management more accessible and concise in React.<br />
        1. Props are used to pass data from a parent component to a child component.<br />
        2. Props are read-only and cannot be modified within the child component; they are immutable.<br />
        3. Values for props are determined by the parent component and can be changed by the parent, causing the child component to re-render with the updated props.<br />
        4. Props are used to make components reusable between different components.
      </>
    ),
  },
  {
    question: '5.	State and variable difference?',
    answer: (
      <>
        <strong>State:</strong><br />
        Component- Each component can have its own state, and changes to this state trigger re-renders of that component.<br />
        Managed by React: State is typically initialized and managed by React itself. We use the setState function (in class components) or the useState hook (in functional components) to update the state. React ensures that the component re-renders when state changes.<br />
        Asynchronous: State updates are always asynchronous to optimize performance. We cannot rely on the immediate value of state after calling setState or useState.<br /><br />
        <strong>Regular Variables (Class Properties or Functional Variables):</strong><br />
        Component-wide: Regular variables are not specific to React and can exist outside the React component's rendering mechanism. They are not managed by React, and their changes do not automatically trigger re-renders.<br />
        Local to Functions: Regular variables in functional components are typically declared within the function's scope, and their values persist across renders. They do not trigger re-renders unless they are used in the component's JSX, causing the component to re-render when the component function is called.<br />
        Synchronous: Updates to regular variables are synchronous, immediately access their updated values.
      </>
    ),
  },
  {
    question: '6.	Control and uncontrollable components in react?',
    answer: (
      <>
        <b>Controlled</b> the form element's value is controlled by the component's state. In the component has full control over the input's value, and it is synchronized with the component's state.<br /><br />
        <b>Uncontrolled</b> the form element's value is not controlled by React's state. Instead, the value is managed by the DOM itself, and React does not have direct control over it.<br /><br />
        <strong>When to Use Controlled vs. Uncontrolled Components:</strong><br />
        Use controlled we want to validate, manipulate, or submit the form data through React's state management.<br />
        Use uncontrolled we need to integrate with non-React code, such as third-party libraries or when we want to simply read the input's value directly from the DOM without managing it through React's state.
      </>
    ),
  },
  {
    question: '7.	React hooks purpose?',
    answer: (
      <>
        <strong>State Management in Functional Components:</strong>
        Before hooks, functional components were stateless and couldn't manage component-level state. Hooks, such as useState, allow functional components to manage local state.<br /><br />
        <strong>Reusable Logic:</strong>
        Hooks allow to extract and reuse component logic. We can create custom hooks to sum up complex logic and share it across different components. This promotes code reusability and maintainability.<br /><br />
        <strong>Side Effects:</strong>
        Hooks like useEffect allow to perform side effects in functional components. We can handle tasks like data fetching, DOM manipulation, and subscription management within useEffect, making components more capable and expressive.<br /><br />
        <strong>Avoiding Class Complexity:</strong>
        Hooks reduce the complexity associated with class components. We no longer need to deal with lifecycle methods and class instance properties when managing state and side effects.<br /><br />
        <strong>Improved Readability:</strong>
        Hooks can make code more readable by isolating related logic in separate functions. For example, useState and useEffect are typically defined near the code that relies on them, improving code organization.<br /><br />
        <strong>Eliminating the Need for HOCs and Render Props:</strong>
        Higher-Order Components (HOCs) and Render Props were common patterns for sharing behavior between components. Hooks simplify this by allowing to sum up and share logic without the need for additional components.<br /><br />
        <strong>Functional Paradigm:</strong>
        Hooks align with the functional programming paradigm. They encourage the use of pure functions and make it easier to test and reason about components.<br /><br />
        <strong>Simplifying Testing:</strong>
        Testing functional components with hooks is often more straightforward because we can test each piece of logic in isolation, thanks to their modular nature.
      </>
    ),
  },
  {
    question: '8.	What is useEffect ?',
    answer: (
      <>
        useEffect is a hook in React that allows us to perform side effects in functional components. Side effects refer to operations that don't directly result in rendering components but have an impact on the application, such as data fetching, DOM manipulation, or subscribing to external data sources.<br/>
        -The useEffect hook is used to manage side effects by executing a function after the component renders and when certain dependencies change. It serves as a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.<br/><br/>
        <strong>Key points about useEffect:</strong><br/>
        <strong>Function Argument:</strong> We pass a function to useEffect as its first argument. This function contains the code for the side effect.<br/><br/>
        <strong>Dependency Array:</strong> As the second argument, we provide an array of dependencies. The effect will run whenever one or more of these dependencies change. If the array is empty, the effect runs only after the initial render.<br/><br/>
        <strong>Cleanup Function:</strong> Inside the effect function, we can return a cleanup function. This cleanup function is executed when the component unmounts or when the dependencies change before the next execution of the effect. It's used for tasks like unsubscribing from subscriptions or releasing resources.<br/><br/>
        <b>Here are some common use cases for useEffect:</b>
        •	Fetching data from an API when the component mounts.<br/>
        •	Subscribing to data streams or events.<br/>
        •	Updating the DOM after rendering (e.g., manipulating the DOM or adding event listeners).<br/>
        •	Managing timers and intervals.<br/>
        •	Cleaning up resources when the component unmounts.<br/>
        The useEffect hook is used to fetch data when the component mounts (since the dependency array is empty), and the fetched data is stored in the component's state.
      </>
    ),
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  // Add more questions and answers as needed
];