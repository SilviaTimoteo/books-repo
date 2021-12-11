import React from 'react';

class ErrorBoundary extends React.PureComponent<
  {},
  { hasError: boolean; errorMessage?: string }
> {
  state = { hasError: false, errorMessage: '' };
  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
      errorMessage: `${error.name}\n${error.message}\n`,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
