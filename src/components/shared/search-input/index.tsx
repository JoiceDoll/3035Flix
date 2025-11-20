import { forwardRef } from "react";
import { Search } from "lucide-react";

type SearchInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ handleChange, className, ...rest }, ref) => {
    return (
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          {...rest}
          ref={ref}
          placeholder="Buscar"
          onChange={handleChange}
          className={`w-full rounded-md border border-gray-300 px-10 py-2 outline-none transition
            focus:border-violet-600 focus:ring-2 focus:ring-violet-400 ${className}`}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
