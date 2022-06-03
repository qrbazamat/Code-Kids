import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    return (
        <div
            className="my-container my-vh-100 py-4"
        >
            <div
                className="circle under"
            ></div>
            <div
                className="circle pout"
            ></div>
            <div
                className="my-header w-100 h-100"
            >
                <nav
                    className="navbar navbar-expand-lg navbar-light p-4"
                >
                    <div className="container-fluid">
                        <Link
                            to='/'
                            className="navbar-brand font-semibold"
                        >CODE KIDS</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse font-regular" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Kurslar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Rejalar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resurslar</a>
                                </li>
                            </ul>
                            <Link to="/auth/sign-in">
                                <button className="navbar-text start-btn font-semibold">
                                    Boshlash
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <div className="text px-5">
                        <h1 className="title font-semibold">
                            Farzandlaringiz qisqa vaqt ichida dasturlashni o'rganishadi
                        </h1>

                        <p className="description font-light">
                            <span className="font-regular">Code Kids</span> - bu bolalar hech qanday tajribasiz kodlashni o'rganadigan qiziqarli va ta'limiy o'yin muhitidir. <span className="font-regular">Code Kids</span>-ning mukofotga sazovor bo'lgan kodlash kurslarini tugatgandan so'ng, bolalar dasturlash dunyosida ishonch va muvaffaqiyat hissi bilan harakat qilishlari mumkin.
                        </p>

                        <div className="sign-up mt-5 pt-5">
                            <Link to='auth/sign-up'>
                            <button
                                    type="button"
                                    className="btn my-btn-sign-up px-4 py-2"
                                >
                                    Ro'yxatdan o'tish
                                </button>
                            </Link>

                            <Link to="auth/sign-in">
                                <button
                                    type="button"
                                    className="btn my-btn-sign-in ms-3 px-4 py-2"
                                >
                                    Kirish
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-image"></div>
                </div>
            </div>
        </div>
    )
}

export default Header