FROM php:7.2-apache

RUN cd .. && mkdir lab-infra.heig

COPY content/lab-infra.heig/ /var/www/lab-infra.heig/
COPY conf/lab-infra.heig.conf /etc/apache2/sites-available/

RUN chown -R $USER:$USER /var/www/lab-infra.heig
RUN chmod -R 755 /var/www/lab-infra.heig

RUN a2ensite lab-infra.heig.conf
CMD a2dissite 000-default.conf

EXPOSE 8080

