

export const customerRoutes = (route: string) => {
  return ['/Products'].includes(route)
}

export const percentageCalc = (priceA: number , priceB: number) => {
  const discountAmount = priceA - priceB;

  return (discountAmount / priceA) * 100;
} 