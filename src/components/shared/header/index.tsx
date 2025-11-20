import { SearchInput } from "../search-input";
import logo from "@/assets/logo/3035flix.png";
import { TrendingUp } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import useDebounce from "@/hooks/useDebounce";

export const Header = () => {
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    navigate(`/search?query=${value}`);
  }

  const onSearch = useDebounce(handleChange, 1000);

  return (
    <header className="relative px-8 md:px-18 py-3 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32 z-20 bg-(image:--bg-top-linear-gradient)">
      <div className="px-2 md:px-0 w-full md:max-w-[300px] flex items-center justify-between md:gap-24">
        <Link to="/" aria-label="Ir para a página inicial">
          <img
            src={logo}
            alt="3035FLIX Logo"
            aria-label="3035flix Logo"
            loading="lazy"
            className="object-contain min-w-[50px] size-[60px]"
          />
        </Link>
        <nav aria-label="Menu principal">
          <ul className="flex items-center gap-16">
            <li>
              <Link to="/" className="flex items-center gap-3 ">
                <TrendingUp aria-hidden="true" focusable="false" />
                <span className="underline font-bold underline-offset-4">
                  Trending
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full sm:max-w-[600px] md:max-w-[350px]">
        <SearchInput handleChange={onSearch} />
      </div>
    </header>
  );
};
