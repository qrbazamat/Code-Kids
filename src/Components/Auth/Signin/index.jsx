import { Link } from 'react-router-dom'
import './style.css'

const Signin = () => (
    <div className="auth-panel sign-in">
        <h2 className="font-semibold">Kirish</h2>
        <p className="font-regular">
            Code Kids platformasidagi shaxsiy profilingizga kiring !
        </p>

        <form action="">
            <button className="with-google btn font-semibold">
                <i className="icon google-icon"></i>
                Google hisobi orqali kirish
            </button>

            <div className="or-self-sign">
                <p className="font-light">
                    yoki login va parol orqali kiring
                </p>
            </div>

            <label className="font-semibold" htmlFor="log-in">
                Login<span>*</span>
            </label>
            <input
                type="text"
                id="log-in"
                name="log-in"
                placeholder="Loginingizni kiriting"
            />

            <label className="font-semibold" htmlFor="password">
                Parol<span>*</span>
            </label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Parolingizni kiriting"
            />

            <div className="remember-forget">
                <label className="font-semibold" htmlFor="remember">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                    />
                    Meni eslab qol
                </label>

                <a href="#bla-bla">
                    Parolni unutdingizmi ?
                </a>
            </div>

            <button type="submit" className="login-button btn">
                Kirish
            </button>

            <div className="create-profile font-regular">
                Shaxsiy hisobingiz yo'qmi ?
                <Link to="../sign-up">Ro'yxatdan o'tish</Link>
            </div>
        </form>
    </div>
)

export default Signin