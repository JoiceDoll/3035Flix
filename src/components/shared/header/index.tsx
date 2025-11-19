// import logo from "";
import logo from "@/assets/logo/3035flix.png";
import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-3 flex items-center gap-16 md:gap-32 mb-16">
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
    </header>
  );
};
