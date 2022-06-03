import { Link, Outlet } from 'react-router-dom'
import './style.css'

const Auth = () => (
    <div className="Auth">
        <div
            className="container my-container my-vh-100 py-4"
        >
            <div
                className="circle under"
            ></div>
            <div
                className="circle pout"
            ></div>
            <div
                className="my-header auth w-100 h-100"
            >
                <nav
                    className="navbar navbar-expand-lg navbar-light p-4"
                >
                    <div className="container-fluid">
                        <Link
                            to='/'
                            className="navbar-brand font-semibold"
                        >CODE KIDS</Link>
                    </div>
                </nav>

                <div className="content">
                    <Outlet />
                    <div className="bg-image"></div>
                </div>
            </div>
        </div>
    </div>
)

export default Auth