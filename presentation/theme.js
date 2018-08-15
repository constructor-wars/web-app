import { future } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import javascript from "react-syntax-highlighter/languages/prism/javascript";
import jsx from "react-syntax-highlighter/languages/prism/jsx";

export default {
  ...future,
  prism: {
    style: okaidia,
    languages: {
      javascript: javascript,
      jsx: jsx
    }
  }
};
