   M S B A M L   `   `   `  ����O  KRapidAid Desktop App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:RapidAid_Desktop_AppRapidAid_Desktop_App  5   	   (    "RapidAid_Desktop_App.MainDashboard   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:RapidAid_Desktop_App     5   	     � Title$  RapidAid Dashboard��5   	   $	��650��6$   $
��1200��61    � WindowStartupLocation$ CenterScreen=�6>   .��5	      � .+�5   
   ]� ���#2c3e50$��80��6)   $	��Top=�65   .+�5      �� -   5         ��Name$ btnBack��5      $	��←��6&   $��20��62   $��25��6=   $��0q�6_   $
��Left=�5      $��20(�6$   
���   �$	��Top=�6E   �� 5       �� Orientation$ 
Horizontal=�6   $
��Left=�62   $��10q�6H   .+�5      �� $��	/logo.png��6   $��60��6+   $��60��66   �� 5      $��10,10q�6   .+�5      �� $��RapidAid��6    
�������$��20(�6C   �� 5      $5��/Disaster Management & Emergency Response System��6    
�������$��10(�5   1   5      5      �� 5      $ 
Horizontal=�6   $��Center=�62   $��100,20,0,20q�6O   .+�5      �� -   5        $��Active Incidents��5      $��2.5,5,2.55,5q�6R   $��90��6h   �� 5      -   5        $��Past Incidents��5      $��2.5,5,2.55,5q�6N   $��90��6d   5      �� 5      $��Right=�6   $��	10,10,0,0q�60   $	��350��6C   $��Right=�6O   .+�5       �� -   5         ��Name$ 
txtWelcome��5       
�������$��14(�6C   $��	0,10,10,5q�6Q    �� TextAlignment$ Right=�6d   �� 5!      -   5        $��Logout��5!      
������ 
�������$��1q�5"   E   $��0,5,20,0q�5#      $��60��6+   $��Right=�66   ���	#FFDFDFDF6R   5$      5%       � 5(   
   -   5          �Name$ MainContentFrame��5(      $��20,100,20,20q�6*     � NavigationUIVisibility$ Hidden=�6@   5)      5*      