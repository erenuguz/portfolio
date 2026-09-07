export default function Textarea({label, name, rows = 5, ...rest}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            <label
                htmlFor={name}
                style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                }}
            >
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                rows={rows}
                style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '14px',
                    padding: '10px 12px',
                    border: '1px solid #E5E2DA',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#1A1A1A',
                    outline: 'none',
                    resize: 'vertical',
                }}
                {...rest}
            />
        </div>
    );
}
