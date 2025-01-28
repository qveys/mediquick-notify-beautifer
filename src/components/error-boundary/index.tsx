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
              Une erreur inattendue s'est produite. Nos équipes ont été notifiées 
              et travaillent à résoudre le problème.
            </p>
            {this.state.error && (
              <div className="bg-muted/30 p-4 rounded-md text-left overflow-auto">
                <p className="font-mono text-sm text-muted-foreground">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            <Button
              variant="default"
              className="mt-4"
              onClick={this.handleReload}
            >
              Rafraîchir la page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}