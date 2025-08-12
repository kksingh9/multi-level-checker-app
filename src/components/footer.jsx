const Footer = () => {
    return (
        <div className="w-full h-16 bg-white flex items-center justify-between border-t border-gray-200 px-4">
            <p className="text-sm text-gray-500">Copyright {new Date().getFullYear()} . All rights reserved.</p>
            <p className="text-sm text-gray-500">Version 1.0.0</p>
        </div>
    )
}

export default Footer;