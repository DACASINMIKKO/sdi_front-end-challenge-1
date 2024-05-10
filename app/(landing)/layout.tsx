import React from 'react'

const LandingLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="relative min-h-screen min-w-screen flex flex-col">
            {children}
        </div>
    )
}

export default LandingLayout