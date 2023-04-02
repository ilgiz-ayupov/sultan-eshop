import React from "react";
import cn from "classnames";

import { VolumeType } from "types/ProductType";

import { ReactComponent as UnitMLIcon } from "assets/icons/unit-ml.svg";
import { ReactComponent as UnitGIcon } from "assets/icons/unit-g.svg";
import styles from "./ProductVolumeCard.module.scss";

interface ProductVolumeCardProps {
  volume: VolumeType;
  className?: string;
}

const ProductVolumeCard: React.FC<ProductVolumeCardProps> = ({
  volume,
  className,
}) => {
  function getVolumeIcon(volume: VolumeType) {
    switch (volume.unit) {
      case "мл":
        return <UnitMLIcon />;
      case "г":
        return <UnitGIcon />;
      default:
        return null;
    }
  }

  const formattedName = `${volume.qty} ${volume.unit}`;
  const volumeClasses = cn(styles.volume, className);
  return (
    <div className={volumeClasses}>
      {getVolumeIcon(volume)}
      <span>{formattedName}</span>
    </div>
  );
};

export default ProductVolumeCard;
