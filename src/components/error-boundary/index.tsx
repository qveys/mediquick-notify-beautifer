import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full space-y-4 text-center">
            <h1 className="text-2xl font-bold text-destructive">
              Oups ! Quelque chose s'est mal passé
            </h1>
            <p className="text-muted-foreground">
              Une erreur inattendue est survenue. Nous nous excusons pour la gêne occasionnée.
            </p>
            {this.state.error && (
              <pre className="mt-4 p-4 bg-muted rounded-lg text-left overflow-auto text-sm">
                {this.state.error.message}
              </pre>
            )}
            <div className="mt-6">
              <Button onClick={this.handleReload} variant="default">
                Recharger l'application
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
