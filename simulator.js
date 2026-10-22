function random(min, max, decimals = 1) {
  const value = Math.random() * (max - min) + min;
  return +value.toFixed(decimals);
}

function simulateZone(zone) {
  zone.temperature = random(18, 34);
  zone.humidity = random(40, 90, 0);
  zone.soil = random(20, 85, 0);
  zone.light = random(5000, 35000, 0);
  zone.co2 = random(450, 1800, 0);
  zone.waterLevel = Math.max(0, zone.waterLevel - random(0, 0.6));
  return zone;
}