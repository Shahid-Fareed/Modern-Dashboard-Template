// components/AuthBrand.tsx

import themeConfig from "@/config/themeConfig";

interface AuthBrandProps {
  title?: string;
  desc?: string;
}

const AuthBrand: React.FC<AuthBrandProps> = ({ title, desc }: AuthBrandProps) => {
  const pathImage = process.env.NEXT_PUBLIC_APP_IMAGES_PATH; // Using Next.js environment variable
  console.log('AuthBrand');

  return (
    <>
      <div className="text-center">
        {/* Logo */}
        <img
          src={`${pathImage}/${themeConfig.logo.src}`}
          alt={themeConfig.app.name}
          width={themeConfig.logo.width}
          height={themeConfig.logo.height}
          className="mx-auto block mb-[48px]"
        />

        <div className="mb-[15px]">
          {/* Title */}
          {title && (
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-black text-5xl font-semibold leading-[56px]"
            ></h1>
          )}

          {/* Description */}
          {desc && <p className="text-sm font-normal leading-9 text-black mb-[3px]">{desc}</p>}
        </div>
      </div>
    </>
  );
};

export default AuthBrand;
