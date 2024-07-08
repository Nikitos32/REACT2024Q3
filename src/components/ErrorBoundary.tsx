import { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

export default class ErrorBoundary extends Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log('Error has occured');
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
