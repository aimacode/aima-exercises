Let's define each problem as a Constraint Satisfaction Problem (CSP). A CSP consists of:

1.  **Variables**: The entities we need to assign values to.
    
2.  **Domains**: The possible values that each variable can take.
    
3.  **Constraints**: The restrictions on the values that the variables can take simultaneously.
    

### 1\. Rectilinear Floor-Planning

**Variables**:

*   RiR\_iRi​ for each smaller rectangle iii, representing the coordinates of the bottom-left corner of the rectangle.
    

**Domains**:

*   Possible coordinates (xi,yi)(x\_i, y\_i)(xi​,yi​) for the bottom-left corner of each rectangle within the larger rectangle's dimensions.
    

**Constraints**:

*   **Non-overlapping constraint**: For any two rectangles RiR\_iRi​ and RjR\_jRj​, the rectangles must not overlap:
    
    *   xi+wi≤xjx\_i + w\_i \\leq x\_jxi​+wi​≤xj​ or xj+wj≤xix\_j + w\_j \\leq x\_ixj​+wj​≤xi​ or yi+hi≤yjy\_i + h\_i \\leq y\_jyi​+hi​≤yj​ or yj+hj≤yiy\_j + h\_j \\leq y\_iyj​+hj​≤yi​, where (xi,yi)(x\_i, y\_i)(xi​,yi​) are the coordinates of the bottom-left corner of RiR\_iRi​, and wiw\_iwi​ and hih\_ihi​ are the width and height of RiR\_iRi​.
        
*   **Boundary constraint**: Each rectangle must be completely inside the larger rectangle:
    
    *   xi≥0x\_i \\geq 0xi​≥0, yi≥0y\_i \\geq 0yi​≥0, xi+wi≤Wx\_i + w\_i \\leq Wxi​+wi​≤W, yi+hi≤Hy\_i + h\_i \\leq Hyi​+hi​≤H, where WWW and HHH are the width and height of the larger rectangle.
        

### 2\. Class Scheduling

**Variables**:

*   CiC\_iCi​ for each class iii, representing the time slot and classroom assigned to the class.
    

**Domains**:

*   Possible pairs (t,r)(t, r)(t,r) where ttt is a time slot and rrr is a classroom.
    

**Constraints**:

*   **Classroom availability constraint**: No two classes can be in the same classroom at the same time:
    
    *   If Ci=(t,r)C\_i = (t, r)Ci​=(t,r) and Cj=(t,r)C\_j = (t, r)Cj​=(t,r), then i=ji = ji=j.
        
*   **Professor availability constraint**: Each professor can teach only one class at a time and must be available to teach the assigned class:
    
    *   If Ci=(t,\_)C\_i = (t, \\\_)Ci​=(t,\_) and Cj=(t,\_)C\_j = (t, \\\_)Cj​=(t,\_) and professor PPP is assigned to both classes, then i=ji = ji=j.
        
*   **Professor qualification constraint**: A professor can only teach classes they are qualified to teach:
    
    *   If PPP is assigned to class iii, then PPP must be in the set of qualified professors for class iii.
        

### 3\. Hamiltonian Tour

**Variables**:

*   CiC\_iCi​ for each city iii, representing the position of the city in the tour.
    

**Domains**:

*   Possible positions in the tour, ranging from 1 to NNN (where NNN is the number of cities).
    

**Constraints**:

*   **Unique position constraint**: Each city must occupy a unique position in the tour:
    
    *   For all i≠ji \\neq ji=j, Ci≠CjC\_i \\neq C\_jCi​=Cj​.
        
*   **Connectivity constraint**: The cities must be connected in the given network:
    
    *   For all consecutive positions kkk and k+1k+1k+1, there must be a road between the cities assigned to these positions:
        
        *   If Ci=kC\_i = kCi​=k and Cj=k+1C\_j = k+1Cj​=k+1, then there must be a road between city iii and city jjj.
            
*   **Closed tour constraint**: The tour must return to the starting city:
    
    *   There must be a road between the cities assigned to positions NNN and 1:
        
        *   If Ci=NC\_i = NCi​=N and Cj=1C\_j = 1Cj​=1, then there must be a road between city iii and city jjj.
