   M S B A M L   `   `   `  ����O  KRapidAid Desktop App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:RapidAid_Desktop_AppRapidAid_Desktop_App  5      .    (RapidAid_Desktop_App.IncidentDetailsPage   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      4local"clr-namespace:RapidAid_Desktop_App     5        N� Title$  IncidentDetailsPage��5	      .��5      �� .��5   
   �� $��20q�6   .+�5      �� $��24(�6.   $
��Bold"�6<   $��	0,0,10,15q�6N   $��	Underline{�6a   ��6   �� *Type+6a   ]� 5      .+�5      �� $��Name :��6   $��0,0,10,5q�6*   �� 5      ��6   �� *Name+5      ]� 5      .+�5      �� $��Contact No. :��6   $��0,0,10,5q�61   �� 5      ��6   �� *	Contact+5      ]� 5      .+�5      �� $��Casualties :��6   $��0,0,10,5q�60   �� 5      ��6   �� *InjuredOrDead+   BooleanToTextConverter �� 	Converter# [  5      �� 5      $��0,0,0,5q�6e   ��6   �� *NumInjuredOrDead+ �� StringFormat$  Estimated Casualties : {0}��6e   ]� 5      .+�5      �� $��
District :��6   $��0,0,10,5q�6.   �� 5      ��6   �� *
District+5      ]� 5       .+�5!      �� $��
Location :��6   $��0,0,10,5q�6.   �� 5"      ��6   �� *
Location+5#      ]� 5$      .+�5%      �� $��Discription :��6   $��0,0,10,5q�61   $
��Wrap=�6C   $	��600��6W   �� 5&      $
��Wrap=�69   ��6   �� *Description+69   5'      ]� 5(      .+�5)      �� $��Date :��6   $��0,0,10,5q�6*   �� 5*      $
��Wrap=�62   ��6   �� *Date+62   5+      ]� 5,      .+�5-      �� $��Affected Count :��6   $��0,0,10,5q�64   �� 5.      $
��Wrap=�6;   ��6   �� *AffectedCount+6;   5/      �� 51      $
��0,20q�6   .+�52      �� $-��'Add Emergency Responses to the Incident��6   $��0,0,10,0q�6K   
�������
���  ��6t   �� 53      -   5         ��Name$ txtEmergencyResponse��53      $��0,0,0,10q�69   $��50��6K   �� 54      -   5        $��Add Response��54      $	��100��6J   
����� �6V   �� 56      ��6   �� *EmergencyResponses+��57      �� 58      .R�59      ]� $��5q�6(   $	��600��63   
�������.+�5:   "   �� $
��Wrap=�6E   $	��500��6Y   ��6,   �� *	Message+6Y   �� 5;   "   -   5        $��Delete��5;   )   $��50��6W   $��20��6b   
�������$��Right=�6�   y�6�   ��  �� Path$ IsAdmin�  BoolToVisibilityConverter# [ 5=      5>      5A      5C      �� 5E      $
��0,20q�6   .+�5F      �� $"��Add Comments to the Incident��6   $��0,0,10,0q�6@   
�������
���  ��6i   �� 5G      -   5        $ 
txtComment��5G      $��0,0,0,10q�6/   $��50��6A   �� 5H      -   5        $��Add Comment��5H      $	��100��6H   
����� �6T   �� 5I      ��6   �� *
Comments+��5J      �� 5K      .R�5L      �� ��6%   �� *	IsAdmin+  AdminCommentConverter# [ ._�5M   "   ]� $��5q�6,   $	��600��67   .+�5N   "   �� $
��Wrap=�6E   $	��500��6Y   ��6,   �� *	Content+6Y   �� 5O   "   -   5        $��Delete��5O   )   $��50��6V   $��20��6a   
�������$��Right=�6�   y�6�   �� $ IsAdmin�# [ 5P   #   5Q      5R      5T      5U      5V      5W      5X      