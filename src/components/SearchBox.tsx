type SearchProps = {
    image: string;
    name: string;
}

const SearchBox : React.FC<SearchProps> = ({image, name}) => {
    return (
        <div className="relative w-[270px] mx-[35px] text-gray1">
            <input
                type="text"
                placeholder={name}
                className="w-full text-xxsmall border border-primary-light rounded-[4px] py-[13px] pl-[17px] pr-[20px] focus:outline-0"
            />
            <img alt="search icon" src={image} className="absolute top-[14px] right-[12px] w-[18px] h-[18px]" />
        </div>
    )
}

export default SearchBox;