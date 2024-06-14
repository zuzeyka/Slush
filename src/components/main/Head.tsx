import Avatar from "@/components/ui/avatar/Avatar";
import { BellIcon, SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '@/components/authorization/AuthContext';
import { Button } from "../ui/button";

const Head: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return (
        <header className="bg-card1 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={document.documentElement.classList.contains('dark') ? "/src/assets/svg/logoDecorativeDark.svg" : "/src/assets/svg/logoDecorativeWhite.svg"} alt="logo" />
                </Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold"
                                to="/store"
                            >
                                Крамниця
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold"
                                to={isAuthenticated ? "/library" : "/login"}
                            >
                                Бібліотека
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold"
                                to={isAuthenticated ? "/chat" : "/login"}
                            >
                                Чат
                            </Link>
                        </li>
                    </ul>
                </nav>
                {isAuthenticated ? (
                    <div className="flex items-center space-x-4">

                        <Link
                            className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-typography text-sm hover:brightness-50"
                            to="/settings"
                        >
                            <SettingsIcon className="text-typography h-6 w-6" />
                        </Link>
                        <div className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-white text-sm hover:brightness-50">
                            <BellIcon className="text-typography h-6 w-6" />
                        </div>
                        <Avatar alt="User Avatar" src="" className="w-10 h-10"></Avatar>
                    </div>
                ) : (<Button className="bg-secondary rounded-2xl text-typography hover:bg-cardLight12 font-semibold text-button-2"><Link

                    to="/login"
                >Увійти</Link></Button>)}

            </div>
        </header>
    );
};

export default Head;
