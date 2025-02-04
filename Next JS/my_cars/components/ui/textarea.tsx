import * as React from 'react';
import { cn } from '../lib/utils';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => {
    return (
        <textarea
        ref={ref}
        className={cn(
            'block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50',
            className || ''
        )}
        {...props}
        />
    );
});

Textarea.displayName = 'Textarea';