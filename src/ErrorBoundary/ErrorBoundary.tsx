import React, { Component, ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

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
