using FabricsShop.AppDataFile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace FabricsShop.Pages
{
    /// <summary>
    /// Логика взаимодействия для PageEditNew.xaml
    /// </summary>

   

    public partial class PageEditNew : Page
    {
        bool logicRb = false;

        public PageEditNew(Product product)
        {
            InitializeComponent();
            // CmbxOwner.ItemsSource = ConnectOdb.conObj.Product.Product
            ProductObj.Id = product.ProductArticleNumber;

           /* ProductName.Text = product.ProductName;
            ProductCost.Text = Convert.ToString(product.ProductCost);
            ProductImage.Text = product.ProductImage;
            ProductDescription.Text = product.ProductDescription;*/

            if (product.ProductStatus != "Нет в наличии")
            {
                RbActive.IsChecked = true;
                logicRb = true;
            }
            else 
            {
                LbActive.IsChecked = true;
                logicRb = false;
            }
        }

        private void RadioButton_Checked(object sender, RoutedEventArgs e)
        {

        }

        private void BtnEditSave_Click(object sender, RoutedEventArgs e)
        {
            /*IEnumerable<Product> products = ConnectOdb.conObj.Product.Where(x => x.ProductArticleNumber == ProductObj.Id).AsEnumerable()*/
        }
    }
}
