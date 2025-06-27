import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';
import { describe, it, expect, vi } from 'vitest';


describe('Button', () => {
  it('renders with default text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies default variant and size classes', () => {
    render(<Button>Test</Button>);
    const btn = screen.getByText('Test');
    expect(btn.className).toContain('bg-primary');
    expect(btn.className).toContain('h-9');
  });

  it('applies custom variant and size', () => {
    render(<Button variant="outline" size="sm">Small Outline</Button>);
    const btn = screen.getByText('Small Outline');
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('text-xs');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as child when using asChild prop', () => {
    render(
      <Button asChild>
        <a href="/test">Test Link</a>
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });
});
