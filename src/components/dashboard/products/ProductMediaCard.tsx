import Image from "next/image";

type Props = {
  product: any;
};

export default function ProductMediaCard({
  product,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-6
      "
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Product Media
      </h2>

      {/* Featured Image */}

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-3">
          Featured Image
        </p>

        <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.featuredImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Gallery */}

      <div>
        <p className="text-sm text-gray-500 mb-3">
          Gallery Images
        </p>

        <div className="grid grid-cols-2 gap-3">
          {product.galleryImages.map(
            (
              image: string,
              index: number
            ) => (
              <div
                key={index}
                className="
                  relative
                  h-28
                  rounded-xl
                  overflow-hidden
                  bg-gray-100
                "
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}