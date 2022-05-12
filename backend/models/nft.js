import mongoose from "mongoose";

const nftSchema = mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      required: true,
    },
    colection: {
      type: mongoose.Schema.Types.String,
      ref: "Coleccion",
    },
    category: {
      type: mongoose.Schema.Types.String,
      ref: "Categorias",
    },
    creatorId: {
      type: mongoose.Schema.Types.String,
      ref: "Usuario",
    },
    ownerId: {
      type: mongoose.Schema.Types.String,
      ref: "Usuario",
    },
    image: {
      url: String,
      public_id: String,
    },
    priceBase: {
      type: Number,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    likes: {
      type: Number,
      trim: true,
    },
    avaliable: {
      type: Boolean,
      trim: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const NftCreated = mongoose.model("NftCreated", nftSchema);
export default NftCreated;
