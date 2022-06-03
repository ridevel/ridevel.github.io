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
    /// Логика взаимодействия для PageMain.xaml
    /// </summary>
    public partial class PageMain : Page
    {
        public PageMain(Product product)
        {
            InitializeComponent();
        }

        public void EnterBtn_Click(object sender, RoutedEventArgs e)
        {
            string login = Login.Text.Trim();
            string password = Password.Text.Trim();

            if (login.Length < 5)
            {
                Login.ToolTip = "Логин содержит менее 5 символов";
                Login.Background = Brushes.DarkSeaGreen;
            }
            else if (password.Length < 3)
            {
                Password.ToolTip = "Пароль содержит менее 3 символов";
                Password.Background = Brushes.DarkSeaGreen;
            }
            else
            {
                Login.ToolTip = "";
                Login.Background = Brushes.Transparent;
                Password.ToolTip = "";
                Password.Background = Brushes.Transparent;

                Users authUser = null;

                
                

                using (ApplicationContext context = new ApplicationContext())
                {

                }
                if (authUser != null)
                    MessageBox.Show("All is good!");
                else
                
                    MessageBox.Show("Not");
                
            }   
        }
    }
}
