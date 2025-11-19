import { SearchInput } from "../search-input";
import logo from "@/assets/logo/3035flix.png";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";

export const Header = () => {
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    navigate(`/search?query=${value}`);
  }

  const onSearch = useDebounce(handleChange, 1000);

  return (
    <header className="relative px-18 py-3 flex items-center justify-between gap-16 md:gap-32 z-20 bg-(image:--bg-top-linear-gradient)">
      <div className="flex items-center gap-24">
        <a href="/">
          <img
            src={logo}
            alt="3035FLIX Logo"
            aria-label="3035flix Logo"
            loading="lazy"
            className="object-contain"
            width={60}
            height={60}
          />
        </a>
        <nav>
          <ul className="flex items-center gap-16">
            <li>
              <a href="/trending" className="flex items-center gap-3">
                <TrendingUp />
                <span className="hidden md:block">Trending</span>
              </a>
            </li>
            {/* <li>
            <a href="/series">Séries</a>
          </li>
          <li>
            <a href="/filmes">Filmes</a>
          </li> */}
          </ul>
        </nav>
      </div>

      <div className="max-w-[800px]">
        <SearchInput handleChange={onSearch} />
      </div>
    </header>
  );
};
