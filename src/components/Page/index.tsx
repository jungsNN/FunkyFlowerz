interface PageProps {
    isMobile: boolean;
}

const Page: React.FunctionComponent<PageProps> = ({isMobile, children }) => {
    return (
        <main className="mb-[10rem] max-w-[1400px]" style={{padding: isMobile ? '0 24px' : '0 112px' }}>
            {children}
        </main>
    );
}

export default Page;
