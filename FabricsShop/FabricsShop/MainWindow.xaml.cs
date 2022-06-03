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
using FabricsShop.AppDataFile;
using FabricsShop.Pages;

namespace FabricsShop
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            ConnectOdb.conObj = new FabricsEntities();
            FrameObj.frameMain = FrmMain;

            FrmMain.Navigate(new PageProductAdmin());
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            FrameObj.frameMain.Navigate(new PageMain((sender as Button).DataContext as Product));
        }
    }
}
