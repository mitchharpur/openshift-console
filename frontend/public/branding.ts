const getProductName = () => {
  switch ((window as any).SERVER_FLAGS.branding) {
    case 'ocp':
      return 'OpenShift Container Platform';
    case 'online':
      return 'OpenShift Online';
    case 'dedicated':
      return 'OpenShift Dedicated';
    default:
      return 'OKD';
  }
};
export const productName = getProductName();
