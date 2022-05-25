type Merge<T, U> = Omit<T, keyof U> & U;

type PropsWithAs<P, T extends React.ElementType> = P & { as?: T };

export type PolymorphicPropsWithoutRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithoutRef<T>,
  PropsWithAs<P, T>
>;

/**
 * MEMO: React.ElementType は keyof JSX.IntrinsicElements | React.ComponentClass | React.FC を内包している
 * PropsWithRefは無効なrefをとりのぞく
 * React.ComponentPropsWithRefはFCならPropsWithRef<ComponentProps<T>>
 */
export type PolymorphicPropsWithRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]> // 組み込みコンポーネント
    : React.ComponentPropsWithRef<T>, // React製コンポーネント
  PropsWithAs<P, T>
>;
